
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
				{ id: 1, name: "shovel", description: "Stanley brand", taskId: 3 },
				{ id: 2, name: "hammer", description: "heavy brand", taskId: 1 },
				{ id: 3, name: "hacksaw", description: "sharp brand", taskId: 2 },
			]);
    });
};
