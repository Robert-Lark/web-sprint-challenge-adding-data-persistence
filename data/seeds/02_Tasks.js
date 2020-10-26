
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
				{
					id: 1,
					taskDescription: "work hard all day",
					notes: "don't work too hard",
					projectId: 1,
					completed: false,
				},
				{
					id: 2,
					taskDescription: "Do a good Job",
					notes: "Mrs Appleworth is a tough nut",
					projectId: 2,
					completed: false,
				},
				{
					id: 3,
					taskDescription: "Payday's a coming",
					notes: "dont spend it all in one go",
					projectId: 1,
					completed: true,
				},
			]);
    });
};
