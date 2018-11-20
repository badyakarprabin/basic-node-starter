exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  return knex('doctors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('doctors').insert([
        { name: 'Dr.Ram', department_id: 1 },
        { name: 'Dr.Rama', department_id: 2 },
        { name: 'Dr.Ramon', department_id: 3 }
      ]);
    });
};
