export const datingsimroute = [
    {
      torrent: [
        {
          scenario: "You meet a mysterious stranger in the park. What do you do?",
          options: ["Approach and say hello", "Stay back and observe", "Walk away"],
          optionaffection: [-10, 0, 10],
          opt1scenario2: [
            {
              scenario: "The stranger smiles and asks about your day. How do you respond?",
              options: ["Share about your day", "Ask about theirs", "Remain vague"],
              optionaffection: [-10, 0, 10],
              opt1scenario2opt1finalscenario: [
                {
                  scenario: "You both bond over shared interests. What do you suggest next?",
                  options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt1scenario2opt2finalscenario: [
                {
                  scenario: "The stranger talks about their hobbies. How do you engage?",
                  options: ["Express interest", "Share a related story", "Change the topic"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt1scenario2opt3finalscenario: [
                {
                  scenario: "They seem unsure how to continue. How do you handle it?",
                  options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                  optionaffection: [-10, 0, 10],
                },
              ],
            },
          ],
          opt2scenario2: [
            {
              scenario: "You notice them holding a sketchbook. What do you do?",
              options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
              optionaffection: [-10, 0, 10],
              opt2scenario2opt1finalscenario: [
                {
                  scenario: "They show you a sketch of a nearby scene. How do you react?",
                  options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt2scenario2opt2finalscenario: [
                {
                  scenario: "They offer to sketch you. What do you say?",
                  options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt2scenario2opt3finalscenario: [
                {
                  scenario: "They look nervous. How do you ease the tension?",
                  options: ["Smile warmly", "Change the subject", "Offer to leave"],
                  optionaffection: [-10, 0, 10],
                },
              ],
            },
          ],
          opt3scenario2: [
            {
              scenario: "You walk away but they call out to you. How do you respond?",
              options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
              optionaffection: [-10, 0, 10],
              opt3scenario2opt1finalscenario: [
                {
                  scenario: "They invite you to join them for a walk. What do you do?",
                  options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt3scenario2opt2finalscenario: [
                {
                  scenario: "They seem disappointed. How do you react?",
                  options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                  optionaffection: [-10, 0, 10],
                },
              ],
              opt3scenario2opt3finalscenario: [
                {
                  scenario: "They appear hurt by your behavior. How do you handle it?",
                  options: ["Apologize", "Try to justify", "Ignore them and leave"],
                  optionaffection: [-10, 0, 10],
                },
              ],
            },
          ],
        },
      ],
      ending1: "You became close friends with the stranger.",
      ending2: "You shared a beautiful moment but went separate ways.",
      ending3: "You parted ways without much interaction.",
    },

    {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },

      {
        torrent: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            options: ["Approach and say hello", "Stay back and observe", "Walk away"],
            optionaffection: [-10, 0, 10],
            opt1scenario2: [
              {
                scenario: "The stranger smiles and asks about your day. How do you respond?",
                options: ["Share about your day", "Ask about theirs", "Remain vague"],
                optionaffection: [-10, 0, 10],
                opt1scenario2opt1finalscenario: [
                  {
                    scenario: "You both bond over shared interests. What do you suggest next?",
                    options: ["Go for coffee", "Exchange phone numbers", "Take a walk together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt2finalscenario: [
                  {
                    scenario: "The stranger talks about their hobbies. How do you engage?",
                    options: ["Express interest", "Share a related story", "Change the topic"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt1scenario2opt3finalscenario: [
                  {
                    scenario: "They seem unsure how to continue. How do you handle it?",
                    options: ["Offer reassurance", "Ask a question", "Leave the conversation"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt2scenario2: [
              {
                scenario: "You notice them holding a sketchbook. What do you do?",
                options: ["Compliment their work", "Ask to see their sketches", "Ignore it"],
                optionaffection: [-10, 0, 10],
                opt2scenario2opt1finalscenario: [
                  {
                    scenario: "They show you a sketch of a nearby scene. How do you react?",
                    options: ["Praise their talent", "Ask for drawing tips", "Sketch something together"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt2finalscenario: [
                  {
                    scenario: "They offer to sketch you. What do you say?",
                    options: ["Agree enthusiastically", "Politely decline", "Make a joke about it"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt2scenario2opt3finalscenario: [
                  {
                    scenario: "They look nervous. How do you ease the tension?",
                    options: ["Smile warmly", "Change the subject", "Offer to leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
            opt3scenario2: [
              {
                scenario: "You walk away but they call out to you. How do you respond?",
                options: ["Turn back and listen", "Wave and keep walking", "Ignore them"],
                optionaffection: [-10, 0, 10],
                opt3scenario2opt1finalscenario: [
                  {
                    scenario: "They invite you to join them for a walk. What do you do?",
                    options: ["Accept the invitation", "Politely decline", "Suggest an alternative"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt2finalscenario: [
                  {
                    scenario: "They seem disappointed. How do you react?",
                    options: ["Apologize sincerely", "Explain your reasons", "Leave without a word"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
                opt3scenario2opt3finalscenario: [
                  {
                    scenario: "They appear hurt by your behavior. How do you handle it?",
                    options: ["Apologize", "Try to justify", "Ignore them and leave"],
                    optionaffection: [-10, 0, 10],
                  },
                ],
              },
            ],
          },
        ],
        ending1: "You became close friends with the stranger.",
        ending2: "You shared a beautiful moment but went separate ways.",
        ending3: "You parted ways without much interaction.",
      },



  ];