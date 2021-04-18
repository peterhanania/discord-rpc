<h1 align="center">
Discord RPC Client
  <br>
</h1>


<p align="center">
  <a href="#about">About</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
</p>

## About

A way of showing a button status on discord.

If you liked this repository, feel free to leave a star ⭐!


## Installation

```
git clone https://github.com/peterhanania/discord-rpc.git
```


## Setting Up

After installing the files, visit [discord's Developer Application](https://discord.com/developers/applications) and create a Bot.
> Note: The application name you choose will be shown as the title on your profile.

After creating your application, head to rich presence, then upload the picture you want on your profile and name it `image`. Also, keep refreshing the page after the upload until the image shows up. (sometimes the image disappears when you refresh since it haven't uploaded yet)

Next head to `index.js`, and edit it as so:

Details: The information you want to show under the title.<br>
largeImage: The image you uploaded to rich presence and will show on your profile.<br>
largeText: The text that will show once the image is hovered.<br>

Now for the buttons is where you put the button names and the links.<br>


Finally, copy the client ID of the bot and paste it in the `config.json`
```
{
"client_id":"BOT_CLIENT_ID"
}

```
 
Once done, you can launch the code with `start.bat` or `node index.js`. 
>Make sure discord is opened once you do.

Any questions? DM me on <a href="https://discord.com/users/710465231779790849">Discord</a>.
