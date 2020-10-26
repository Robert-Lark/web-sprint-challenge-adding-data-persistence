
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
				{ id: 1, name: "shovel", resourceDescription: "Stanley brand", taskId: 3 },
				{ id: 2, name: "hammer", resourceDescription: "heavy brand", taskId: 1 },
				{ id: 3, name: "hacksaw", resourceDescription: "sharp brand", taskId: 2 },
			]);
    });
};
