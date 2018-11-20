exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.all([knex('doctors').del(), knex('departments').del()]).then(function() {
    // Inserts seed entries
    return knex('departments').insert([
      { id: 1, name: 'ENT Department', description: 'ENT Department' },
      { id: 2, name: 'Gyno Department', description: 'ENT Department' },
      { id: 3, name: 'OPD Department', description: 'ENT Department' }
    ]);
  });
};
