'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      id: 1,
      name: 'Lotus - Analog Delay / Pitch Shifter',
      type: 'Plugins',
      description: 'LOTUS is an analog delay / pitch shifter with hundreds of unique capabilities. If you’re trying to make your melodies more unique, you need this plugin.',
      cost: '120',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      name: 'Aurora - Instrument Plugin',
      type: 'Plugins',
      description: 'With our last instrument plugin, KEYS, our goal was to include the best go-to keys sounds without any fluff to slow down creativity.',
      cost: '100',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      name: 'Keys - Instrument Plugin',
      type: 'Plugins',
      description: 'Our goal was NO filler sounds - we only included sounds that we personally would want to use every day. 100+ presets of pure gold!',
      cost: '100',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 4,
      name: 'Ultimates Bundle',
      type: 'Bundles',
      description: 'Basses can be the make or break for any track, and typically glue together the vibe of your mix and track as a whole.',
      cost: '25',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 5,
      name: 'Gems Melody Custom Bundle',
      type: 'Bundles',
      description: 'Choose 3 melody packs from the list below (each pack includes 20 melody loops with stems and MIDI)',
      cost: '40',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 6,
      name: 'Cobra - Hip Hop Sample Pack',
      type: 'Drum Kits',
      description: 'After connecting with some of the world’s best artists in the Hip Hop space, it seems that a lot of their songs always have that “IT” factor that make them successful.',
      cost: 'free',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 7,
      name: 'Diamonds – Hip Hop Samples',
      type: 'Drum Kits',
      description: 'Just look at huge artists like Drake, Migos, and Travis Scott who are constantly selling out stadiums and dominating top charts everywhere.',
      cost: '25',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 8,
      name: 'Memories - Vintage Sample Pack',
      type: 'Drum Kits',
      description: 'Each 808 in this pack truly has its own identity, each one fit for a variety of different styles and uses musically.',
      cost: '40',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 9,
      name: 'Gems - Teaser Pack',
      type: 'Melodies',
      description: 'With some of the biggest producers like Murda Beatz and Mike Will creating billboard hits one after the other, it’s clear that trap music is one of the biggest sub-genres in modern hip-hop.',
      cost: '56',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 10,
      name: 'Gems Vol. 7 - Drill Melodies',
      type: 'Melodies',
      description: 'Our production team put together this collection of gritty and bouncy melodies that pair perfectly with heavy 808’s and hard hitting drums.',
      cost: 'free',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 11,
      name: 'Gems Vol. 7 - Drill Melodies',
      type: 'Melodies',
      description: 'That’s why we put together this collection, with a vast library of different style samples for you to build off of, your beats are guaranteed to stand out!',
      cost: '80',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 12,
      name: 'Python - MIDI Collection',
      type: 'MIDI',
      description: 'Finding motivation to create memorable melodies and enchanting chords can be tough for any producer!',
      cost: 'free',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 13,
      name: 'MIDI Deluxe Collection',
      type: 'MIDI',
      description: 'And sometimes it can be time consuming to go in and come up with new hi-hat patterns to keep your beats interesting.',
      cost: '125',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 14,
      name: 'Anthem Vocal Loops & One Shots',
      type: 'One-Shots',
      description: 'This HUGE bank of melodic vocal loops and one shots was inspired by legendary artists like Flume, Daft Punk, Skrillex, Diplo, DJ Snake and Porter Robinson.',
      cost: '17',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 15,
      name: 'Apex Vol. 1 - One Shots',
      type: 'One-Shots',
      description: 'Finding the right kick for your track has never been easier.',
      cost: '15',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 16,
      name: 'Apex Vol. 2 - One Shots',
      type: 'One-Shots',
      description: 'Finding the right kick for your track has never been easier.',
      cost: '30',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 17,
      name: 'Nuclear for Xfer Serum (Dubstep)',
      type: 'Serum',
      description: 'The uniquely blended genre that is Hybrid Trap continues to evolve with cutting-edge creativity and sophisticated sound design.',
      cost: 'free',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 18,
      name: 'Vibes for Xfer Serum (Chill)',
      type: 'Serum',
      description: 'Vibes for Serum includes 90 lush pads, warm keys, nostalgic plucks and more to take your production in a whole new direction.',
      cost: '256',
      created_at: new Date(),
      updated_at: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {})
  }
}
