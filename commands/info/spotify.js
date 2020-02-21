module.exports = {
    name: "spotify",
    description: "gives you spotify accounts",
    run: async (client, message, args) => {
      message.channel.send({ embed: { author: { name: "🚀 Spotify Account sent in DMs!" }, color: 0x7289DA }})
      message.author.send("Spotify Account, Here I come!:")
var string = `Premium	tim.fouhy@reactive.com:Bunky2010	Cntry: AU | Exp: 14/03/2020	21.02.2020 12:13:56
Premium	valevelasquez@hotmail.com:Vale8506	Cntry: CO | Exp: 25/02/2020	21.02.2020 12:14:01
Premium	laurenf@columbus.rr.com:Seaside832	Cntry: US | Exp: 16/03/2020	21.02.2020 12:14:03
Premium	irishdancer177@msn.com:Nicole15	Cntry: GB | Exp: 24/02/2020	21.02.2020 12:14:05
Premium	caroline_2709@yahoo.co.uk:Valentine35	Cntry: GB | Exp: 29/02/2020	21.02.2020 12:14:09
Premium	stephd_4@msn.com:Hamseygreen1	Cntry: GB | Exp: 29/02/2020	21.02.2020 12:14:24
Premium	boracing547@msn.com:Troopers16	Cntry: US | Exp: 29/02/2020	21.02.2020 12:14:29
Premium	ashlirrobson@yahoo.com:Investigation24	Cntry: US | Exp: 05/03/2020	21.02.2020 12:14:31
Premium	r32skyline@live.com:Darinkas1	Cntry: AU | Exp: 11/03/2020	21.02.2020 12:14:47
Premium	Malexander1999@yahoo.com:Crystal	Cntry: US	21.02.2020 12:14:55
Premium	gmacmillan@btinternet.com:Purple29	Cntry: GB | Exp: 21/03/2020	21.02.2020 12:15:00
Premium	rmoran224@gmail.com:Flapjack224	Cntry: US | Exp: 10/03/2020	21.02.2020 12:15:03
Premium	p_graham@live.com:Goalie01	Cntry: CA | Exp: 11/03/2020	21.02.2020 12:15:09
Premium	angelicpacheco@yahoo.com:Pinkybaby	Cntry: US | Exp: 01/03/2020	21.02.2020 12:15:12`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);

    }
}