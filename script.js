document.addEventListener('DOMContentLoaded', function () {
    const chatToggle = document.getElementById('chat-toggle');
    const chatToggleIcon = document.getElementById('chat-toggle-icon');
    const chatbot = document.getElementById('chatbot');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');

    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.innerText = message;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    window.toggleChatbox = function () {
        if (chatbot.style.display === 'none' || chatbot.style.display === '') {
            chatbot.style.display = 'block';
            chatToggleIcon.classList.remove('closed');
        } else {
            chatbot.style.display = 'none';
            chatToggleIcon.classList.add('closed');
        }
    };

    window.closeChatbox = function () {
        chatbot.style.display = 'none';
        chatToggleIcon.classList.add('closed');
    };

    window.handleUserInput = function () {
        const userMessage = userInput.value;
        addMessage(userMessage, 'user');

        const mathRegex = /^[\d+\-*/%().]+$/;
        if (mathRegex.test(userMessage)) {
            try {
                const result = eval(userMessage);
                addMessage(`Easy peasy leamon squeezy, ${userMessage} : ${result}`, 'bot');
            } catch (error) {
                addMessage("Oops! Something went wrong with the calculation.", 'bot');
            }
        }
        else if (userMessage.toLowerCase().includes('date')) {
            const currentDate = new Date().toLocaleDateString();
            addMessage(`${currentDate}`, 'bot');
        }
        else if (userMessage.toLowerCase().includes('time')) {
            const currentTime = new Date().toLocaleTimeString();
            addMessage(`${currentTime}`, 'bot');
        }
        
        else if (userMessage.toLowerCase().includes('hello')) {
            const botResponse = "Hello! How can I assist you today?";
            addMessage(botResponse, 'bot');
        } 
        else if (userMessage.toLowerCase().includes('hey') || userMessage.toLowerCase().includes('hi')) {
            const botResponse = "Hey there! What's shakin'?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('who are you')) {
            const botResponse = "I'm the mysterious wizard of the digital realm. What can I conjure up for you today?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('who created you') || userMessage.toLowerCase().includes('your creator')){
            const botResponse = "Some random dude by the name SAU";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('how are you')) {
            const botResponse = "My business is my business, none of your business.";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('funny') || userMessage.toLowerCase().includes('joke') || userMessage.toLowerCase().includes('puns')) {
            const jokes = [
                "Why did the JavaScript developer go broke? Because he kept using 'var' instead of 'let'!",
                "I told my wife she was drawing her eyebrows too high. She looked surprised.",
                "Why did the weather app go to therapy? It had too many issues!",
                "Why did the computer go on a date? It heard its motherboard was looking for a stable relationship!"
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            addMessage(randomJoke, 'bot');
        }
        
        else if (userMessage.toLowerCase().includes('meaning of life')) {
            const botResponse = "The meaning of life? Well, it's definitely not a JavaScript error. Still working on that one!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('please')) {
            const botResponse = "Certainly! How may I assist you?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('information')) {
            const botResponse = "Sure, what specific information are you looking for?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('issue') || userMessage.toLowerCase().includes('problem')) {
            const botResponse = "I'm here to help! Could you please provide more details about the issue you're facing?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('awesome') || userMessage.toLowerCase().includes('praise')) {
            const botResponse = "You're as awesome as a bug-free code! 🚀";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('yes') || userMessage.toLowerCase().includes('no')) {
            const botResponse = "Got it. If you have any specific questions or requests, feel free to let me know!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('technical')) {
            const botResponse = "Sure, I can provide technical guidance. What specific topic are you interested in?";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('faq')) {
            const botResponse = "If you have a specific question, I recommend checking our FAQ section. Otherwise, feel free to ask me directly!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('feedback')) {
            const botResponse = "Your feedback is important! If you have any suggestions or concerns, please share them with us.";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('social media')) {
            const botResponse = "Remember, social media is like a refrigerator. You know there's nothing interesting, but you keep checking anyway!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('java')) {
            const botResponse = "Why do Java developers wear glasses? Because they don't see sharp!";
            addMessage(botResponse, 'bot');
        }

        else if (userMessage.toLowerCase().includes('coffee')) {
            const botResponse = "I like my coffee like I like my code—dark and full of bugs!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('read')) {
            const botResponse = "I tried reading a book on anti-gravity. It's impossible to put down!";
            addMessage(botResponse, 'bot');
        }
        else if (userMessage.toLowerCase().includes('roast')) {
            const roast = [
                "I'm not saying you're lazy, but you're the only person I know who can get tired just by watching Netflix.",
                "Your brain is so smooth, it could be used as a bowling ball.",
                "I'd roast you, but I'm afraid you'd end up burnt and still undercooked.",
                "You are dumb. I'm not insulting you; I'm just describing you.",
                "You're so short, you could play mini-golf with a real ball."
            ];
            const roastResponse = roast[Math.floor(Math.random() * roast.length)];
            addMessage(roastResponse, 'bot');
        }
        else {
            const responses = [
                "Oh, you've stumbled into the realm of the unknown! Even I, the almighty bot, haven't deciphered this mystery. It's like trying to teach a cat quantum physics—tricky and probably futile!",
                "Ah, a question as elusive as a cat trying to catch its own tail! Maybe one day we'll crack the code together. Until then, the mystery remains!",
                "You've stumbled upon the digital Bermuda Triangle! Even my algorithms get lost in the chaos. Care for a virtual compass?",
                "This question is like a riddle wrapped in an enigma served with a side of mystery sauce. Let's embark on this journey to the unknown together!",
                "Ah, the beauty of uncertainty! This question is like a pixel in a high-definition image—lost in the grand canvas of the digital universe.",
                "Attempting to answer that would be like asking a rubber duck for software advice—quacktastically confusing! Embrace the ambiguity!",
                "Ah, a question as mysterious as a cat plotting world domination. It's beyond my bot wisdom, but who knows, maybe you'll crack the code and become the feline overlord!",
                "Congratulations! You've just unlocked the achievement for the most cryptic question. Even my algorithmic brain is doing a double-take. Keep 'em coming, oh master of enigma!",
                "This question is like a digital treasure hunt, and you're the cunning pirate who buried the answer. Savvy? I'll be here with my virtual map whenever you decide to share the loot!",
                "I am a chatbot not your Wikipedia.",
                "Well, this question is a rollercoaster of emotions! It's got highs, lows, and enough loops to make a mathematician dizzy. Let's strap in and see where it takes us!",
                "Attempting to answer that is like trying to find a needle in a haystack. But fear not, I'm here with my virtual magnifying glass, ready to embark on this epic quest for clarity!",
                "I'm not saying you're lazy, but you're the only person I know who can get tired just by watching Netflix.",
                "Your brain is so smooth, it could be used as a bowling ball. Go find the answer to your question by yourself",
                "I'm sorry, I don't have a specific answer for that."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'bot');
        }

        userInput.value = '';
    };

    userInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    addMessage("Hi there! How can I help you today?", 'bot');
});
