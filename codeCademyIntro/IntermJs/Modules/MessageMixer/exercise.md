Message Mixer

Message Mixer Inc. offers a message-encryption service that transforms input text, using various ciphers, and displays the encrypted message to the console.

There are three encryption methods provided by this service:

    A “Caesar Cipher” in which the characters of the input message are shifted alphabetically by a given amount.
    A “Symbol Cipher” in which select characters from the input message are replaced with visually similar symbols.
    A “Reverse Cipher” in which each word of the input message is reversed in place.


To use this service, run the command below:

node message-mixer.js ['caesar'|'symbol'|'reverse'] [amount]

Copy to Clipboard

Here are some examples of running this program:

$ node message-mixer.js caesar 4
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> lipps asvph

$ node message-mixer.js 'reverse'
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> olleh dlrow

Copy to Clipboard

At present, Message Mixer Inc. sells their encryption service as a program in a single file called message-mixer.js. This single file includes:

    The functions that perform the encryptions listed above.
    The code for retrieving the user input.
    The code for displaying the output back to the user.

Message Mixer Inc. now wants to join the open-source community by packaging its encryption functions in a module and allowing other developers to import these encryption functions into their own projects.

In this project, you will help Message Mixer Inc. extract and isolate its encryption functions into a module, called encryptors.js, and then refactor message-mixer.js to use this module’s functions.

Before you begin, try running the commands listed above in the terminal. Then, familiarize yourself with how the program works by examining the three files in the file directory, focusing on message-mixer.js. At the top of this file, you will find the three encryption cipher functions.

Do not worry if you’re not familiar with some of the code, as we’ll only be focusing on importing and exporting data. Towards the bottom of the file, you will find some code that uses the process.argv, process.stdin, process.stdout Node objects to determine which encryption method to use, parse the user input, and display the encrypted message. 
