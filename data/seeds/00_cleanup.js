
exports.seed = async function(knex) {
  await knex("Projects").truncate();
	await knex("Tasks").truncate();
	await knex("Resources").truncate();
};
