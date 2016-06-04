console.log('script is firing');

//quotes

var quotes = [
    {quote: 'Astronomy compels the soul to look upward, and leads us from this world to another.',
     author: '-Plato'
    },
    {quote: 'The universe is wider than our views of it.',
     author: '-Henry David Thoreau'
    },
    {quote: 'For me, it is far better to grasp the Universe as it really is than to persist in delusion, however satisfying and reassuring.',
     author: '-Carl Sagan'
    },
    {quote: 'Once we overcome our fear of being tiny, we find ourselves on the threshold of a vast and awesome Universe that utterly dwarfs — in time, in space, and in potential — the tidy anthropocentric proscenium of our ancestors.',
     author: '-Carl Sagan'
    },
    {quote: 'As a fraction of your tax dollar today, what is the total cost of all spaceborne telescopes, planetary probes, the rovers on Mars, the International Space Station, the space shuttle, telescopes yet to orbit, and missions yet to fly? Answer: one-half of one percent of each tax dollar. Half a penny. I’d prefer it were more: perhaps two cents on the dollar. Even during the storied Apollo era, peak NASA spending amounted to little more than four cents on the tax dollar.',
     author: '-Neil deGrasse Tyson'
    },
    {quote: 'Let us not fool ourselves into thinking we went to the Moon because we are pioneers, or discoverers, or adventurers. We went to the Moon because it was the militaristically expedient thing to do.',
     author: '-Neil deGrasse Tyson'
    },
    {quote: 'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.',
     author: '-Stephen Hawking'
    },
    {quote: 'From out there on the Moon, international politics look so petty. You want to grab a politician by the scruff of the neck and drag him a quarter of a million miles out and say, ‘Look at that, you son of a bitch.',
     author: '-Edgar Mitchel'
    },
    {quote: 'It’s a fixer-upper of a planet but we could make it work.',
     author: '-Elon Musk speaking on Mars'
    },
    {quote: 'I look up at the night sky, and I know that, yes, we are part of this Universe, we are in this Universe, but perhaps more important than both of those facts is that the Universe is in us. When I reflect on that fact, I look up—many people feel small, because they’re small and the Universe is big, but I feel big, because my atoms came from those stars.',
     author: '-Neil deGrasse Tyson'
    },
    {quote: 'The remarkable feature of physical laws is that they apply everywhere, whether or not you choose to believe in them. After the laws of physics, everything else is opinion.',
     author: '-Neil deGrasse Tyson'
    },
    {quote: 'We are all connected; To each other, biologically. To the earth, chemically. To the rest of the universe atomically.',
     author: '-Neil deGrasse Tyson'
    }
    ];

for(var i = 0; i < 10; i++){
    var random = getRandomNumber();
    console.log(random);   
}

//choose random quote

function getRandomNumber(){
  return Math.floor(Math.random() * (quotes.length));
};

function getQuote(num){
 return quotes[num].quote;   
}

function getAuthor(num){
 return quotes[num].author;   
}

//button click to show new quote

$(".button").click(function() {
  
    $(".button").css('border-color', 'white');
    $(".button").css('color', 'white');
    changeQuote();
    window.setTimeout(resetButtonColor, 100);
    
});

function resetButtonColor(){
     
    $(".button").css('border-color', 'rgba(255,255,255, 0.2)');
    $(".button").css('color', 'rgba(255,255,255, 0.2)');
}

function changeQuote(){
    var ran = getRandomNumber();
    $(".quote").fadeOut(200, function(){
        $(".quote").text("\""+getQuote(ran)+"\"");
    });
    $(".author").fadeOut(200, function(){
        $(".author").text(getAuthor(ran));
    });
    $(".quote").fadeIn(100);
    $(".author").fadeIn(100);
}

//load quote on window load and change quote every so many seconds

window.onload = function(){
    changeQuote();
    window.setInterval(changeQuote, 10000);

};