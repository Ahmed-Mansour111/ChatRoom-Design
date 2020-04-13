import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.friend-drawer--onhover' ).on('click',function() {

      $('.chat-bubble').hide('slow').show('slow');

    })(jQuery);
  }

}

// Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU



// Video tutorial/codealong here: https://youtu.be/fCpw5i_2IYU