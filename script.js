$(function(){

  // audio-card scripts

  vinyl0 = {
    song: new Audio('media/real/1.wav'),

    playPause : function() {
        if($('.q0 #cover a').hasClass('play')) {
            vinyl0.play();
        } else if($('.q0 #cover a').hasClass('pause')) {
          vinyl0.pause();
        }
    },

    play : function() {
        $('.q0 #cover a').removeClass('play').addClass('pause');
        $('.q0 #container').addClass('open');
        $('.q0 #vinyl').addClass('animated');
        vinyl0.song.play();
        vinyl0.song.onended = function() {
          vinyl0.playPause();
        }
    },

    pause : function() {
        $('.q0 #cover a').removeClass('pause').addClass('play');
        $('.q0 #container').removeClass('open');
        $('.q0 #vinyl').removeClass('animated');
        vinyl0.song.pause();
    },
  };

  vinyl1 = {
    song: new Audio('media/real/2.wav'),

    playPause : function() {
        if($('.q1 #cover a').hasClass('play')) {
          vinyl1.play();
        } else if($('.q1 #cover a').hasClass('pause')) {
          vinyl1.pause();
        }
    },

    play : function() {
        $('.q1 #cover a').removeClass('play').addClass('pause');
        $('.q1 #container').addClass('open');
        $('.q1 #vinyl').addClass('animated');
        vinyl1.song.play();
        vinyl1.song.onended = function() {
          vinyl1.playPause();
        }
    },

    pause : function() {
        $('.q1 #cover a').removeClass('pause').addClass('play');
        $('.q1 #container').removeClass('open');
        $('.q1 #vinyl').removeClass('animated');
        vinyl1.song.pause();
    },
  };

  vinyl2 = {
    song: new Audio('media/real/3.wav'),

    playPause : function() {
        if($('.q2 #cover a').hasClass('play')) {
          vinyl2.play();
        } else if($('.q2 #cover a').hasClass('pause')) {
          vinyl2.pause();
        }
    },

    play : function() {
        $('.q2 #cover a').removeClass('play').addClass('pause');
        $('.q2 #container').addClass('open');
        $('.q2 #vinyl').addClass('animated');
        vinyl2.song.play();
        vinyl2.song.onended = function() {
          vinyl2.playPause();
        }
    },

    pause : function() {
        $('.q2 #cover a').removeClass('pause').addClass('play');
        $('.q2 #container').removeClass('open');
        $('.q2 #vinyl').removeClass('animated');
        vinyl2.song.pause();
    },
  };

  vinyl3 = {
    song: new Audio('media/real/4.wav'),

    playPause : function() {
        if($('.q3 #cover a').hasClass('play')) {
          vinyl3.play();
        } else if($('.q3 #cover a').hasClass('pause')) {
          vinyl3.pause();
        }
    },

    play : function() {
        $('.q3 #cover a').removeClass('play').addClass('pause');
        $('.q3 #container').addClass('open');
        $('.q3 #vinyl').addClass('animated');
        vinyl3.song.play();
        vinyl3.song.onended = function() {
          vinyl3.playPause();
        }
    },

    pause : function() {
        $('.q3 #cover a').removeClass('pause').addClass('play');
        $('.q3 #container').removeClass('open');
        $('.q3 #vinyl').removeClass('animated');
        vinyl3.song.pause();
    },
  };

  vinyl4 = {
    song: new Audio('media/fake/1.wav'),

    playPause : function() {
        if($('.q4 #cover a').hasClass('play')) {
          vinyl4.play();
        } else if($('.q4 #cover a').hasClass('pause')) {
          vinyl4.pause();
        }
    },

    play : function() {
        $('.q4 #cover a').removeClass('play').addClass('pause');
        $('.q4 #container').addClass('open');
        $('.q4 #vinyl').addClass('animated');
        vinyl4.song.play();
        vinyl4.song.onended = function() {
          vinyl4.playPause();
        }
    },

    pause : function() {
        $('.q4 #cover a').removeClass('pause').addClass('play');
        $('.q4 #container').removeClass('open');
        $('.q4 #vinyl').removeClass('animated');
        vinyl4.song.pause();
    },
  };

  vinyl5 = {
    song: new Audio('media/fake/2.wav'),

    playPause : function() {
        if($('.q5 #cover a').hasClass('play')) {
          vinyl5.play();
        } else if($('.q5 #cover a').hasClass('pause')) {
          vinyl5.pause();
        }
    },

    play : function() {
        $('.q5 #cover a').removeClass('play').addClass('pause');
        $('.q5 #container').addClass('open');
        $('.q5 #vinyl').addClass('animated');
        vinyl5.song.play();
        vinyl5.song.onended = function() {
          vinyl5.playPause();
        }
    },

    pause : function() {
        $('.q5 #cover a').removeClass('pause').addClass('play');
        $('.q5 #container').removeClass('open');
        $('.q5 #vinyl').removeClass('animated');
        vinyl5.song.pause();
    },
  };

  vinyl6 = {
    song: new Audio('media/fake/3.wav'),

    playPause : function() {
        if($('.q6 #cover a').hasClass('play')) {
          vinyl6.play();
        } else if($('.q6 #cover a').hasClass('pause')) {
          vinyl6.pause();
        }
    },

    play : function() {
        $('.q6 #cover a').removeClass('play').addClass('pause');
        $('.q6 #container').addClass('open');
        $('.q6 #vinyl').addClass('animated');
        vinyl6.song.play();
        vinyl6.song.onended = function() {
          vinyl6.playPause();
        }
    },

    pause : function() {
        $('.q6 #cover a').removeClass('pause').addClass('play');
        $('.q6 #container').removeClass('open');
        $('.q6 #vinyl').removeClass('animated');
        vinyl6.song.pause();
    },
  };

  vinyl7 = {
    song: new Audio('media/fake/4.wav'),

    playPause : function() {
        if($('.q7 #cover a').hasClass('play')) {
          vinyl7.play();
        } else if($('.q7 #cover a').hasClass('pause')) {
          vinyl7.pause();
        }
    },

    play : function() {
        $('.q7 #cover a').removeClass('play').addClass('pause');
        $('.q7 #container').addClass('open');
        $('.q7 #vinyl').addClass('animated');
        vinyl7.song.play();
        vinyl7.song.onended = function() {
          vinyl7.playPause();
        }
    },

    pause : function() {
        $('.q7 #cover a').removeClass('pause').addClass('play');
        $('.q7 #container').removeClass('open');
        $('.q7 #vinyl').removeClass('animated');
        vinyl7.song.pause();
    },
  };

  for (var i=0; i < shuffledListOfClips.length;i++){
    var buttonCreation;
    if (shuffledListOfClips[i].real === true) {
      buttonCreation = `<button id="correct">Joe Rogan</button>
      <button id="wrong">Faux Rogan</button>`
    } else {
      buttonCreation = `<button id="wrong">Joe Rogan</button>
      <button id="correct">Faux Rogan</button>`
    }
    $('ul').append(`<li class="flex-items q${i}">
    <section id="container">
      <section id="cover">
        <a href="javascript:void(0)" class="play vinyl${i}" onclick="${shuffledListOfClips[i].clip_object}" >
          <section id="play"></section>
          <section id="pause"></section>
        </a>
      </section>
    </section>
    <div class="button-section">
      ${buttonCreation}
    </div>
    <div class="validate-answer">
    </div>
    </li>`)
  }

  // $('.play').click(function(){
  //   vinyl_item = $(this).attr("class").split(' ')[0];
  //   console.log(vinyl_item)
  // });

  $('button').click(function(){
    button0 = $(this).parent().children()[0]
    button1 = $(this).parent().children()[1]
    button0Status = $(button0).hasClass('selected')
    button1Status = $(button1).hasClass('selected')
    selectedStatus = $(this).hasClass('selected')
    selectedAnswerBox = $(this).parent().siblings()[1]
    if (!selectedStatus && (button0Status || button1Status)) {
      $(this).toggleClass('selected')
      $(this).parent().children().toggleClass('selected')
    }
    $(this).toggleClass('selected')
    if ($(this).is('#correct') ) {
      $(selectedAnswerBox).html('<img class="answer-icon" src="./media/images/checkmark.svg"/> Correct!')
    } else {
      $(selectedAnswerBox).html('<img class="answer-icon" src="./media/images/cross.svg"/> Nope!')
    }

    if (!$(this).hasClass('selected')) {
      $(selectedAnswerBox).html('')
    }
  });

})

var listOfClips = [
  {
    'path': '/media/real/1.wav',
    'real': true,
    'clip_object': 'vinyl0.playPause()'
  },
  {
    'path': '/media/real/2.wav',
    'real': true,
    'clip_object': 'vinyl1.playPause()'
  },
  {
    'path': '/media/real/3.wav',
    'real': true,
    'clip_object': 'vinyl2.playPause()'
  },
  {
    'path': '/media/real/4.wav',
    'real': true,
    'clip_object': 'vinyl3.playPause()'
  },
  {
    'path': '/media/fake/1.wav',
    'real': false,
    'clip_object': 'vinyl4.playPause()'
  },
  {
    'path': '/media/fake/2.wav',
    'real': false,
    'clip_object': 'vinyl5.playPause()'
  },
  {
    'path': '/media/fake/3.wav',
    'real': false,
    'clip_object': 'vinyl6.playPause()'
  },
  {
    'path': '/media/fake/4.wav',
    'real': false,
    'clip_object': 'vinyl7.playPause()'
  }
];

const shuffleArray = function(array) {
  const a = array.slice();

  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }

  return a;
};

// shuffledListOfClips = shuffleArray(listOfClips)
shuffledListOfClips = listOfClips