// ============================================================================
//  BADGES – My Mini Painting Challenge
// ----------------------------------------------------------------------------
//  One badge per block. Change the names, descriptions and rules freely, then
//  run  npm run check  to make sure nothing is mistyped.
//
//  id      short, lowercase, never change it after release (the app remembers
//          which badges were earned by their id).
//  name    shown under the badge.
//  desc    how to earn it, shown when the badge is tapped.
//  image   your artwork, a square PNG or WebP (512 × 512 works well,
//          transparent background). Put the file in  www/badges/  and give its name here.
//          Until the file exists the app draws a simple placeholder badge.
//  rule    what earns it. Every rule counts FINISHED projects only, except
//          "saved". Rule types:
//
//    { type: "finished", count: 10 }        finish 10 minis in total
//    { type: "streak",   months: 3 }        finish at least one mini in each of
//                                           3 calendar months in a row
//    { type: "month",    count: 3 }         finish 3 minis in one calendar month
//    { type: "schemes",  count: 5 }         finish minis in 5 different colour
//                                           schemes (any of Complementary, Split
//                                           complementary, Tetrad, Golden angle,
//                                           Analogous, Mother colour, Random)
//    { type: "scheme",   name: "Tetrad", count: 1 }      a particular scheme
//    { type: "palettes", count: 4 }         finish minis in 4 different palettes
//                                           (any of Bright, Cold, Grimdark,
//                                           Historical, Warm)
//    { type: "palette",  name: "Grimdark", count: 1 }    a particular palette
//    { type: "ranges",   count: 10 }        use paints from 10 different paint
//                                           ranges across your finished minis
//    { type: "photos",   count: 1 }         finish minis with both a before
//                                           and an after photo
//    { type: "saved",    count: 1 }         save challenges as projects
//                                           (finished or not)
//    { type: "seasonal", count: 1 }         finish seasonal challenges (each season
//                                           counts once)
//    { type: "release",  count: 1 }         finish release day challenges (each
//                                           release counts once)
//    { type: "shares",   count: 1 }         share, save or copy pictures from the app
//    { type: "mix",      count: 1 }         finish minis rolled with Mix it up
//    { type: "onecoat",  count: 1 }         finish minis using only one-coat paints
//                                           (the metallic doesn't count)
//    { type: "brands",   count: 4 }         finish one mini with paints from this
//                                           many different brands
//    { type: "metals",   count: 10 }        use this many different metallics across
//                                           your finished minis
//    { type: "noswap",   count: 1 }         finish minis without swapping a paint
//    { type: "speed",    count: 1 }         finish minis within a day of rolling
//    { type: "slow",     count: 1 }         finish minis rolled 3+ months earlier
//    { type: "comeback", count: 1 }         finish a mini after a month or more
//                                           without finishing one
//    { type: "notes",    count: 5 }         finished projects with notes
//    { type: "earlybird", count: 1 }        finish a release day challenge in its
//                                           first week
//    { type: "founder",  count: 1 }         used the app before the public launch
//
//  Badges appear in the app in the order they are listed here.
// ============================================================================
window.BADGE_DATA = [
  { id: "first-roll",    name: "Dice Are Cast",    desc: "Save your first challenge as a project.",                image: "first-roll.webp",    rule: { type: "saved", count: 1 } },
  { id: "first-finish",  name: "First Finish",     desc: "Finish your first challenge mini.",                      image: "first-finish.webp",  rule: { type: "finished", count: 1 } },
  { id: "finish-5",      name: "Squad Painted",    desc: "Finish 5 challenge minis.",                              image: "finish-5.webp",      rule: { type: "finished", count: 5 } },
  { id: "finish-10",     name: "Ten Down",         desc: "Finish 10 challenge minis.",                             image: "finish-10.webp",     rule: { type: "finished", count: 10 } },
  { id: "finish-25",     name: "Pile of Shame? Never", desc: "Finish 25 challenge minis.",                         image: "finish-25.webp",     rule: { type: "finished", count: 25 } },
  { id: "streak-3",      name: "Three Month Streak", desc: "Finish a mini every month for 3 months in a row.",     image: "streak-3.webp",      rule: { type: "streak", months: 3 } },
  { id: "streak-6",      name: "Six Month Streak", desc: "Finish a mini every month for 6 months in a row.",       image: "streak-6.webp",      rule: { type: "streak", months: 6 } },
  { id: "streak-12",     name: "Year of Paint",    desc: "Finish a mini every month for 12 months in a row.",      image: "streak-12.webp",     rule: { type: "streak", months: 12 } },
  { id: "busy-month",    name: "Hot Brushes",      desc: "Finish 3 minis in one calendar month.",                  image: "busy-month.webp",    rule: { type: "month", count: 3 } },
  { id: "all-schemes",   name: "Colour Theorist",  desc: "Finish minis in 5 different colour schemes.", image: "all-schemes.webp", rule: { type: "schemes", count: 5 } },
  { id: "tetrad",        name: "Four Corners",     desc: "Finish a mini with a Tetrad scheme.",                    image: "tetrad.webp",        rule: { type: "scheme", name: "Tetrad", count: 1 } },
  { id: "all-palettes",  name: "Mood Swings",      desc: "Finish minis in 4 different palettes.", image: "all-palettes.webp", rule: { type: "palettes", count: 4 } },
  { id: "grimdark",      name: "Only War",         desc: "Finish a mini with the Grimdark palette.",               image: "grimdark.webp",      rule: { type: "palette", name: "Grimdark", count: 1 } },
  { id: "ranges-10",     name: "Paint Collector",  desc: "Use paints from 10 different ranges across your finished minis.", image: "ranges-10.webp", rule: { type: "ranges", count: 10 } },
  { id: "seasonal-1",    name: "Seasonal Challenger", desc: "Finish a seasonal challenge.",                    image: "seasonal-1.webp",   rule: { type: "seasonal", count: 1 } },
  { id: "seasonal-4",    name: "Four Seasons",     desc: "Finish 4 seasonal challenges.",                      image: "seasonal-4.webp",   rule: { type: "seasonal", count: 4 } },
  { id: "release-1",     name: "Fresh Pots",       desc: "Finish a release day challenge.",                image: "release-1.webp",    rule: { type: "release", count: 1 } },
  { id: "before-after",  name: "Glow Up",          desc: "Finish a mini with a before and an after photo.",        image: "before-after.webp",  rule: { type: "photos", count: 1 } },
  { id: "show-off",      name: "Show Off",         desc: "Share your first picture from the app.",                 image: "show-off.webp",      rule: { type: "shares", count: 1 } },
  { id: "hype-squad",    name: "Hype Squad",       desc: "Share 10 pictures from the app.",                        image: "hype-squad.webp",    rule: { type: "shares", count: 10 } },
  { id: "complementary", name: "Opposites Attract", desc: "Finish a mini with a Complementary scheme.",            image: "complementary.webp", rule: { type: "scheme", name: "Complementary", count: 1 } },
  { id: "split",         name: "Split Decision",   desc: "Finish a mini with a Split complementary scheme.",       image: "split.webp",         rule: { type: "scheme", name: "Split complementary", count: 1 } },
  { id: "golden",        name: "Sunflower Spiral", desc: "Finish a mini with a Golden angle scheme.",            image: "golden.webp",        rule: { type: "scheme", name: "Golden angle", count: 1 } },
  { id: "analog",        name: "Good Neighbours",  desc: "Finish a mini with an Analogous scheme.",              image: "analog.webp",        rule: { type: "scheme", name: "Analogous", count: 1 } },
  { id: "mother",        name: "Mother Knows Best", desc: "Finish a mini with a Mother colour scheme.",          image: "mother.webp",        rule: { type: "scheme", name: "Mother colour", count: 1 } },
  { id: "cold",          name: "Ice Cold",         desc: "Finish a mini with the Cold palette.",                   image: "cold.webp",          rule: { type: "palette", name: "Cold", count: 1 } },
  { id: "warm",          name: "Forged in Fire",   desc: "Finish a mini with the Warm palette.",                   image: "warm.webp",          rule: { type: "palette", name: "Warm", count: 1 } },
  { id: "bright",        name: "Neon Dreams",      desc: "Finish a mini with the Bright palette.",                 image: "bright.webp",        rule: { type: "palette", name: "Bright", count: 1 } },
  { id: "historical",    name: "Living History",   desc: "Finish a mini with the Historical palette.",           image: "historical.webp",    rule: { type: "palette", name: "Historical", count: 1 } },
  { id: "mix",           name: "Chaos Agent",      desc: "Finish a mini rolled with Mix it up.",                   image: "mix.webp",           rule: { type: "mix", count: 1 } },
  { id: "one-coat",      name: "One-Coat Wonder",  desc: "Finish a mini using only one-coat paints (the metallic doesn't count).", image: "one-coat.webp", rule: { type: "onecoat", count: 1 } },
  { id: "brand-hopper",  name: "Brand Hopper",     desc: "Finish a mini with paints from 4 different brands.",     image: "brand-hopper.webp",  rule: { type: "brands", count: 4 } },
  { id: "metal-head",    name: "Metal Head",       desc: "Use 10 different metallics across your finished minis.", image: "metal-head.webp",   rule: { type: "metals", count: 10 } },
  { id: "true-colours",  name: "True Colours",     desc: "Finish a mini without swapping any paints after rolling.", image: "true-colours.webp", rule: { type: "noswap", count: 1 } },
  { id: "speed-painter", name: "Speed Painter",    desc: "Finish a mini within a day of rolling it.",              image: "speed-painter.webp", rule: { type: "speed", count: 1 } },
  { id: "slow-steady",   name: "Slow and Steady",  desc: "Finish a project you rolled more than 3 months earlier.", image: "slow-steady.webp",  rule: { type: "slow", count: 1 } },
  { id: "comeback",      name: "Comeback Kid",     desc: "Finish a mini after a month or more without finishing one.", image: "comeback.webp",  rule: { type: "comeback", count: 1 } },
  { id: "storyteller",   name: "Storyteller",      desc: "Add notes to 5 finished projects.",                      image: "storyteller.webp",   rule: { type: "notes", count: 5 } },
  { id: "early-bird",    name: "Early Bird",       desc: "Finish a release day challenge within a week of release day.", image: "early-bird.webp", rule: { type: "earlybird", count: 1 } },
  { id: "founding-painter", name: "Founding Painter", desc: "Used the app before its public launch. Thank you for helping test it!", image: "founding-painter.webp", rule: { type: "founder", count: 1 } },
];
