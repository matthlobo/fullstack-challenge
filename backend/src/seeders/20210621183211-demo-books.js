"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Books",
      [
        {
          name: "The One Thing",
          author: "Gary Keller",
          url: "https://images-na.ssl-images-amazon.com/images/I/31bLXJwHXlL._SX344_BO1,204,203,200_.jpg",
          description:
            "The ONE Thing has made more than 200 appearances on national bestseller lists, including #1 Wall Street Journal, NewYork Times, and USA Today.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hooked",
          author: "Nir Eyal",
          url: "https://m.media-amazon.com/images/P/B00LMGLXTS.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Good to Great",
          author: "Jim Collins",
          url: "https://m.media-amazon.com/images/P/B0058DRUV6.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Built to Last, the defining management study of the nineties, showed how great companies triumph over time and how long-term sustained performance can be engineered into the DNA of an enterprise from the verybeginning.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The One Thing",
          author: "Gary Keller",
          url: "https://images-na.ssl-images-amazon.com/images/I/31bLXJwHXlL._SX344_BO1,204,203,200_.jpg",
          description:
            "The ONE Thing has made more than 200 appearances on national bestseller lists, including #1 Wall Street Journal, NewYork Times, and USA Today.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hooked",
          author: "Nir Eyal",
          url: "https://m.media-amazon.com/images/P/B00LMGLXTS.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Good to Great",
          author: "Jim Collins",
          url: "https://m.media-amazon.com/images/P/B0058DRUV6.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Built to Last, the defining management study of the nineties, showed how great companies triumph over time and how long-term sustained performance can be engineered into the DNA of an enterprise from the verybeginning.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The One Thing",
          author: "Gary Keller",
          url: "https://images-na.ssl-images-amazon.com/images/I/31bLXJwHXlL._SX344_BO1,204,203,200_.jpg",
          description:
            "The ONE Thing has made more than 200 appearances on national bestseller lists, including #1 Wall Street Journal, NewYork Times, and USA Today.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Hooked",
          author: "Nir Eyal",
          url: "https://m.media-amazon.com/images/P/B00LMGLXTS.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Why do some products capture widespread attention while others flop? What makes us engage with certain products out of sheer habit? Is there a pattern underlying how technologies hook us?",
          createdAt: new Date(),
          updatedAt: new Date(),
        },        
        {
          name: "Outliers",
          author: "Malcolm Gladwell",
          url: "https://m.media-amazon.com/images/P/B00B0WJIF0.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "Why do some people achieve so much more than others? Can they lie so far out of the ordinary? In this provocative and inspiring book, Malcolm Gladwell looks at everyone from rock stars to professional athletes, software billionaires to scientific geniuses, to show that the story of success is far more surprising, and far more fascinating, than we could ever have imagined.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blink",
          author: "Malcolm Gladwell",
          url: "https://m.media-amazon.com/images/P/B01GISOSSC.01._SCLZZZZZZZ_SX500_.jpg",
          description:
            "An art expert instantly spots a fake. A cop decides whether to shoot. A psychologist accurately predicts a couple's future in minutes. This book is about those moments when we 'know' something without knowing why. It shows that honing your instincts could change the way you think about thinking forever.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "How to Win Friends & Influence People",
          author: "Dale Carnegie",
          url: "https://images-na.ssl-images-amazon.com/images/I/41KSnzUulRL._SX422_BO1,204,203,200_.jpg",
          description:
            "Dale Carnegie's rock-solid, time-tested advice has carried countless people up the ladder of success in their business and personal lives. Now for the first time, the groundbreaking guidebook is available in our Miniature Edition format, for a quick dose of on-the-go inspiration. Fans of the original book as well as those looking for a little life-changing advice will enjoy this mini abridged edition of the classic work.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thinking, Fast and Slow ",
          author: "Daniel Kahneman",
          url: "https://images-na.ssl-images-amazon.com/images/I/41A-sTN8tdL._SX331_BO1,204,203,200_.jpg",
          description:
            "A Nobel Prize-winning psychologist draws on years of research to introduce his 'machinery of the mind' model on human decision-making to reveal the faults and capabilities of intuitive versus logical thinking, providing insights into such topics as optimism, the unpredictability of happiness and the psychological pitfalls of risk-taking.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "The Power of Habit",
          author: "Malcolm Gladwell",
          url: "https://images-na.ssl-images-amazon.com/images/I/51sICtXbMLL._SX327_BO1,204,203,200_.jpg",
          description:
            "In The Power of Habit, award-winning business reporter Charles Duhigg takes us to the thrilling edge of scientific discoveries that explain why habits exist and how they can be changed. Distilling vast amounts of information into engrossing narratives that take us from the boardrooms of Procter & Gamble to the sidelines of the NFL to the front lines of the civil rights movement, Duhigg presents a whole new understanding of human nature and its potential.",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Books", null, {});
  },
};
