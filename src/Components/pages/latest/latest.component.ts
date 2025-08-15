import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Components-latest',
  standalone: true,
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css'],
  imports: [CommonModule]
})
export class LatestComponent {
  posts = [
    {
      img: 'assets/images/img1.jpg',
      category: 'Illustration',
      title: 'Japan House opens in mountainside to foster peak creativity.',
      author: 'Reta Torphy'
    },
    {
      img: 'assets/images/img2.jpg',
      category: 'Photography',
      title: 'Helmut Lang celebrates taxi drivers worldwide in latest campaign',
      author: 'Alessandra Ortiz'
    },
    {
      img: 'assets/images/img3.jpg',
      category: 'Photography',
      title: 'Bowlcut launch a new summer collection that pays homage to “UK legends”',
      author: 'Rosanna Ondricka'
    },
    {
      img: 'assets/images/img4.jpg',
      category: 'Photography',
      title: 'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn',
      author: 'Annie Lueilwitz'
    },
    {
      img: 'assets/images/img5.jpg',
      category: 'Interactive Design',
      title: 'London-based Yinka Ilori’s storytelling furniture',
      author: 'Annie Lueilwitz'
    },
    {
      img: 'assets/images/img6.jpg',
      category: 'Graphic Design',
      title: 'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck',
      author: 'Simeon Brekke'
    },
    {
      img: 'assets/images/img7.jpg',
      category: 'Architecture',
      title: 'Suzanne Saroff’s meticulously arranged photographs alter perceptions',
      author: 'Reta Torphy'
    },
    {
      img: 'assets/images/img8.jpg',
      category: 'Graphic Design',
      title: 'Anu Ambasna’s playful illustrations celebrate club culture, brown bodies and perfect paunches',
      author: 'Leo Bartell'
    },
    {
      img: 'assets/images/img13.jpeg',
      category: 'Interactive Design',
      title: 'Rudy Guedj’s design work sits between “figurative motives and their abstracted representations”',
      author: 'Simeon Peterson'
    },
    {
      img: 'assets/images/img14.jpeg',
      category: 'Interactive Design',
      title: 'How Alex Prager made the world stop and stare',
      author: 'Michal Legros'
    },
    {
      img: 'assets/images/img15.jpeg',
      category: 'Animation',
      title: 'New platform Holdframe offers animators’ full project files for others to download and explore',
      author: 'Simeon Brekke'
    },
    {
      img: 'assets/images/img16.jpeg',
      category: 'Miscellaneous',
      title: 'No balls, all books: it’s July Things!',
      author: 'Rosanna Ondricka'
    },
    {
      img: 'assets/images/img12.jpg',
      category: 'Illustration',
      title: 'M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas',
      author: 'Annie Lueilwitz'
    },
    {
      img: 'assets/images/img11.jpg',
      category: 'Photography',
      title: 'Fred Rowson directs film for Years and Years',
      author: 'Coby Gottlieb'
    },
    {
      img: 'assets/images/img10.jpg',
      category: 'Graphic Design',
      title: 'Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back',
      author: 'Alessandra Ortiz'
    },
    {
      img: 'assets/images/img9.jpg',
      category: 'Graphic Design',
      title: 'A Brief History of the FIFA World Cup Logo',
      author: 'Clem Onojeghuo'
    }
  ];
}

