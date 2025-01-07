export const datingsimroute = [
    {
      route: [
        {
          scenario: "You meet a mysterious stranger in the park. What do you do?",
          name: "Torrent",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Melina",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Blaidd",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Ranni the Witch",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Patches",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Varré",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Fia",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Godrick the Grafted",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Radahn, Starscourge",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Rykard, Lord of Blasphemy",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Malenia, Blade of Miquella",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Miquella",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Mohg, Lord of Blood",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Commander Niall",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Sir Gideon Ofnir",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Ensha of the Royal Remains",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Nepheli Loux",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Hyetta",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "D, Hunter of the Dead",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Gurranq, Beast Roar",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Roderika",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Tanith",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Blackguard Big Boggart",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Hoarah Loux",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Giant Godskin Apostle",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "The Three Fingers",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Shabiri",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Elden Beast",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Radagon of the Golden Order",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Iron Fist Alexander",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Queen Marika, The Eternal",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Morgott, The Omen King",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Rennala, Queen of The Full Moon",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Royal Knight Loretta",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Maliketh, The Black Blade",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Dragonlord Placidusax",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Fire Giant",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Lichdragon Fortissax",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Draconic Tree Sentinel",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Tree Sentinel",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Astel, Naturalborn of The Void",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Sorceress Sellen",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Irina",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Rya",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Enia",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Millicent",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Miriel, Pastor of Vows",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Boc",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Godwyn, Prince of Death",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Adan, The Thief Fire",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Bols, Carian Knight",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Seluvis",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Merchant Kalé",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Smithing Master Hewg",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Thops",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Edgar",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "Rogier",
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
        route: [
          {
            scenario: "You meet a mysterious stranger in the park. What do you do?",
            name: "War Counselor Iji",
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