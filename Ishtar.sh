#!/bin/bash
# Shell script to manage launch Ishtar

echo "Running Ishtar.sh script..."
echo "Thank you for launching the Ishtar AI!"

python3 VerbalReasoningA.1/VerbalReasoner.py &
node DiscordChatbotA.1/bot.js &
