$(document).ready(function() { 
  
  //javascript to hide/show rabbit entrance
  
  $('.Rabbit').click(function () {
    // Fade out Rabbit but keep its layout using spacer
    $(this).animate({ opacity: 0 }, 800, function () {
      $(this).css('visibility', 'hidden');
      // $('.Rabbit_spacer').css('display', 'block');

      // Replace rlink spacer with actual rlink
      $('.rlink_spacer').css('display', 'none');
      $('.rlink').css('display', 'flex').animate({ opacity: 1 }, 800);
    });
  });

  
  //javascript for the search bar
  
  
  //js for badges appearing
  // const f = document.getElementById('form');
  // const q = document.getElementById("query");
// Initially hide all badge images
  $('#bg1S, #bg2S, #bg3S').hide();
  // $('#all-unlocked, #secret-link, #toast').hide();
  $('#all-unlocked, .JustForYou, #toast').hide();

  // Toast function with color coding
  function showToast(message, type = "success", duration = 3000) {
    const toast = $('#toast');

    // Reset classes
    toast.removeClass('toast-success toast-error');

    // Add class based on type
    if (type === "success") {
      toast.addClass('toast-success');
    } else if (type === "error") {
      toast.addClass('toast-error');
    }

    // Set message and show
    toast.text(message).fadeIn();

    // Hide after duration
    setTimeout(() => {
      toast.fadeOut();
    }, duration);
  }

    // Initially hide all badge images
  // $('#bg1S, #bg2S, #bg3S').hide();

  // Handle unlock button click
  $('.boop').on('click', function () {
    const input = $('#input').val().trim();
    let badgeUnlocked = false;

    // Check the code and unlock badges
    switch (input) {
      case "EPIC":
        if (!$('#bg1S').is(':visible')) {
          $('#bg1S').fadeIn().addClass('glow1');  // Show and apply glow
          showToast("🔥 EPIC badge unlocked!", "success");  // Use success for correct input
          badgeUnlocked = true;
        }
        break;
      case "HolyMoly!":
        if (!$('#bg2S').is(':visible')) {
          $('#bg2S').fadeIn().addClass('glow2');  // Show and apply glow
          showToast("🚀 HolyMoly badge activated!", "success");  // Use success for correct input
          badgeUnlocked = true;
        }
        break;
      case "half•alive":
        if (!$('#bg3S').is(':visible')) {
          $('#bg3S').fadeIn().addClass('glow3');  // Show and apply glow
          showToast("🎶 half•alive badge unlocked!", "success");  // Use success for correct input
          badgeUnlocked = true;
        }
        break;
      default:
        showToast("❌ That code doesn't unlock a badge.", "error");  // Error toast for incorrect input
        break;
    }

    $('#input').val('');

    // Check if all badges are unlocked
    const allUnlocked =
      $('#bg1S').is(':visible') &&
      $('#bg2S').is(':visible') &&
      $('#bg3S').is(':visible');

    if (allUnlocked && !$('#all-unlocked').is(':visible')) {
      $('#all-unlocked').fadeIn();
      // $('#secret-link').fadeIn();
      $('.AMessage').hide();
      $('.JustForYou').show();

      // 🎉 Confetti celebration
      confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 60,
          origin: { y: 0.6 }
        });
      }, 1000);

      showToast("🌟 All badges unlocked! Secret revealed!", "success");  // Success toast after all badges unlocked
    }
  });
  
  
  //js for run animations
  
  //the +- 100 px is to move it left or right
	// $('img').click (function() {
	// if ( $(this).position().left > 100 ) {
	// $(this).animate( { left: "-=100px" }, 'fast' );
	// } else {
	// 		$(this).animate( { left: "+=100px" }, 'fast' );
	// }
	// });
  
// rabbit animations
  //Smokey Rabbits:
  $('.r1S').click(function() {
    $(this).hide();
    
    $('.r7S').show().animate({ right: '-=700px' }, 1200, function () {
      $(this).hide();
      $('.r6S').show();
    });
    
  });
  
  //1932 Smokey Rabbits:
    //first sequence
  $('.r2_SO').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r4_SO').show().animate({ top: '+=1000px' }, 1200, function () {
      $(this).hide();
      $('.r5_SO').show();
    }); 
  });
  //second sequence
  $('.r5_SO').click(function() {
    $(this).hide();
    
//     4, 5, & 8 are the others
    $('.r3_SO').show().animate({ top: '-=1000px' }, 1200, function () {
      $(this).hide();
      $('.r8_SO').show();
    });
  });
  
  //1932 LA Olympics Rabbits:
    //first sequence
  $('.r2_LA').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8_LA').show().animate({ left: "+=500px" }, 1200, function () {
      $(this).hide();
      $('.r6_LA').show();
    }); 
  });
  //second sequence goes here; may add in later
  
  //third sequence
  $('.r6_LA').click(function() {  //this will be changed later for the 2nd sequence add-in
    $(this).hide();
    
//     4, 5, & 8 are the others
    $('.r5_LA').show().animate({ top: '-=1000px' }, 1200, function () {
      $(this).hide();
      $('.r3_LA').show();
    });
  });
  
  //Roman Rabbits:
    //first sequence
  $('.r6R').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8iR').show().animate({ left: "-=1000px" }, 1200, function () {
      $(this).hide();
      $('.r4R').show();
    }); 
  });
  
  //Arcadian Rabbits:
    //first sequence
  $('.r5_Arc').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8_Arc').show().animate({ left: "+=1500px" }, 1200, function () {
      $(this).hide();
      $('.r2_Arc').show();
    }); 
  });
  
  //Hermes Antics & Rabbits:
  $('.picH1').click(function() {
    $(this).fadeOut(1000);
    $('.picH2').fadeIn(1500);
    $('.HM').show();
    
    const audio = new Audio('https://cdn.glitch.global/f58bfe5b-8b46-40fb-9359-3b2d1d10a4c7/HermesGiggle.mp3?v=1745776793154');
    audio.play();
  }); 
  
  //first sequence
  $('.r6_Harp').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8i_Harp').show().animate({ left: "-=1500px" }, 1200, function () {
      $(this).hide();
      $('.r4_Harp').show();
    }); 
  });
  //trick sequence
  $('.r7_Harp').click(function() {
    $(this).toggle();
    $('.r5_Harp').toggle();
    // $('.r5_Harp').hide();
    // $(this).show();
  });
  $('.r5_Harp').click(function() {
    $(this).toggle();
    $('.r7_Harp').toggle();
    // $('.r5_Harp').hide();
    // $(this).show();
  });
  
//   Archaic greece:
  $('.r7_ArcG').click(function() {  //this will be changed later for the 2nd sequence add-in
    $(this).hide();
    
//     4, 5, & 8 are the others
    $('.r5_ArcG').show().animate({ top: '+=1000px' }, 1200, function () {
      $(this).hide();
      $('.r6_ArcG').show();
    });
  });
  
  //Homeric Rabbits:
    //first sequence
  $('.r3_Hom').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8_Hom').show().animate({ left: "+=1000px" }, 1200, function () {
      $(this).hide();
      $('.r2_Hom').show();
    }); 
  });
  
  //Odyssey Rabbits:
    //first sequence
  $('.r2_Ody').click(function() {
    $(this).hide();
    
//     4, 5, 3, & 8 are the others
    $('.r8i_Ody').show().animate({ left: "-=1000px" }, 1200, function () {
      $(this).hide();
      $('.r5_Ody').show();
    }); 
  });
  
  //EPIC Rabbits:
    //first sequence
  $('.r9E').click(function() {
    $(this).hide();
    
    $('.rHE').show();
    $('.rBE').show();
  });
  
  
});