exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex("projects")
		.del()
		.then(function () {
			// Inserts seed entries
			return knex("projects").insert([
				{
					id: 1,
					projectName: "removal",
					description: "Dig mrs appleworth sumppump out",
				},
				{
					id: 2,
					projectName: "Stump-Grinding",
					description: "Grind mrs appleworth tree stump out",
				},
				{
					id: 3,
					projectName: "Cleanup",
					description: "Cleanup mrs appleworth shed",
				},
			]);
		});
};
