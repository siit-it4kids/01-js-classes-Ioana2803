class AmongUsPlayer
{
    constructor(name, color, avatar)
    {
        this.name = name;
        this.color = color;
        this.avatar = avatar;
        this.isImpostor = Math.random() < 0.3;
        this.isAlive = true;
    }

    eject()
    {
        if (this.isAlive)
        {
            console.log(`${this.name} was ${this.isImpostor ? 'an impostor. 😉' : 'not an impostor. 🥲'}`);
            this.isAlive = false;
        }
        else
        {
            console.log(`${this.name} is already ejected.`);
        }
    }

    display()
    {
        if(this.isAlive)
        {
            console.log(`${this.name} -> color: ${this.color} and avatar: ${this.avatar} is alive.`);
        }
        else
        {
            console.log(`${this.name} -> color ${this.color} and avatar: ${this.avatar}. Status: DEAD. Was ${this.isImpostor ? 'an impostor. 😉' : 'not an impostor. 🥲'}`);
        }
    }
}

// function choosingImpostor()
// {
//     Math.floor(Math.random() * 10);
// }

function displayPlayers()
{
    for (let i = 0; i < players.length; i++) 
    {
        players[i].display();
    }
}

function ejectPlayers(ejectedPlayer)
{
        //for (let i = 0; i < 3; i++) 
        //{
            if (ejectedPlayer >= 0 && ejectedPlayer < players.length)
            {
                players[ejectedPlayer].eject();
                console.log('============');
                displayPlayers();
            }
        //} 
}

let players = 
[
    new AmongUsPlayer(`Tarzan`, `green` ,`🚂`),
    new AmongUsPlayer(`Deluță`, `white` , `🛴`),
    new AmongUsPlayer(`Andrei Versace`, `brown` , `👟`),
    new AmongUsPlayer(`Dorian Popa`, `orange` , `🐩`),
    new AmongUsPlayer(`James Bond`, `navy` , `🔫`),
    new AmongUsPlayer(`Carlos Sainz`, `red` , `🏎`),
    new AmongUsPlayer(`Biden`, `pink` , `🧾`),
    new AmongUsPlayer(`Putin`, `black` , `🚑`),
    new AmongUsPlayer(`Tim Cook`, `rose-gold` , `📱`),
    new AmongUsPlayer(`Batman`, `yellow` , `🦇`)
];