import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  titles: string[] = [
    'Mérnökinformatikus (Rendszergazda)',
    'Szoftverfejlesztő és -tesztelő'
  ];
  
  displayedText: string = '';
  currentTitleIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
  }

  typeEffect() {
    if (!this.titles || this.titles.length === 0) return;

    const currentTitle = this.titles[this.currentTitleIndex];

    if (this.isDeleting) {
      this.displayedText = currentTitle.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.displayedText = currentTitle.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let typeSpeed = this.isDeleting ? 25 : 50;

    if (!this.isDeleting && this.currentCharIndex === currentTitle.length) {
      typeSpeed = 1200; 
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
      typeSpeed = 300; 
    }

    this.cdr.detectChanges();

    this.timeoutId = window.setTimeout(() => {
      this.typeEffect();
    }, typeSpeed);
  }
}