exports.up = async function (knex) {
	await knex.schema.createTable("projects", (table) => {
		table.increments("id");
		table.text("projectName").notNull().unique();
		table.text("description");
	});
	await knex.schema.createTable("tasks", (table) => {
		table.increments("id");
		table.text("taskDescription").notNull();
		table.text("notes");
		table
			.integer("projectId")
			.references("id")
			.inTable("projects")
			.onUpdate("CASCADE");
    table.boolean("completed").notNull().defaultTo(false);
    
	});
	await knex.schema.createTable("resources", (table) => {
		table.increments("id");
		table.text("name").notNull();
		table.text("resourceDescription").notNull();
		table
			.integer("taskId")
			.references("id")
			.inTable("tasks")
			.onUpdate("CASCADE");
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists("resources");
	await knex.schema.dropTableIfExists("tasks");
	await knex.schema.dropTableIfExists("projects");
};
