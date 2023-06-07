function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function redirectToNewWebsite() {
  window.location.href = "https://freezestore.my.canva.site";
}

function toggleDiscordLink() {
  var discordLink = document.getElementById("discord-link");

  if (discordLink.classList.contains("underline")) {
    window.open("https://discord.gg/YTDxMhTw8P", "_blank");
  }
}

