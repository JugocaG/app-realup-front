import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor() {}
  ngOnInit(): void {
    this.animateNumber();
  }

  // Numeros

  currentNumber: number = 0;
  endNumber: number = 21;
  duration: number = 3000; // Duración en milisegundos

  // Service
  animationState: string = 'animate__fadeInLeft';
  animationDuration: string = '3s';

  // onAnimationEnd(event: AnimationEvent) {
  //   if (event.animationName.includes('fadeInLeft')) {
  //     setTimeout(() => {
  //       this.animationState = 'animate__fadeOutRight';
  //     }, 1500); // Espera 2 segundos antes de iniciar la siguiente animación
  //   } else if (event.animationName.includes('fadeOutRight')) {
  //     this.animationState = 'animate__fadeInLeft';
  //   }
  // }

  animateNumber() {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      let progress = elapsedTime / this.duration;

      // Ajustar la función de aceleración para el efecto deseado
      progress = this.easeInOutSine(progress);

      this.currentNumber = Math.floor(progress * this.endNumber);

      if (elapsedTime < this.duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  // Función de aceleración personalizada (easeInOut)
  easeInOutSine(progress: number): number {
    return -0.5 * (Math.cos(Math.PI * progress) - 1);
  }
}
