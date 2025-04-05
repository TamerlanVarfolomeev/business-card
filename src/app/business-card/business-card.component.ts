import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
@Component({
  imports: [
    MatButtonModule, 
    MatDividerModule,
    MatIconModule,
  ],
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {
  phone: string = '+7 (923) 602-32-70';
  phoheNumber: string = '79236023270'
  whatsappLink: string = 'https://wa.me/' + this.phoheNumber;
  telegramLink: string = 'https://t.me/+' + this.phoheNumber;

  private clipboard = inject(Clipboard);
  private snackBar = inject(MatSnackBar);
  async copyPhoneNumber() {
    try {
      if (navigator.clipboard) {
        // Современный API для ПК и мобильных устройств
        await navigator.clipboard.writeText(this.phone);
      } else {
        // Fallback для старых браузеров
        this.clipboard.copy(this.phone);
      }
      this.showCopiedMessage();
    } catch (err) {
      this.showCopyError();
    }
  }

  private showCopiedMessage() {
    this.snackBar.open('Номер скопирован!', 'OK', {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  private showCopyError() {
    // Альтернативное решение для мобильных устройств
    const input = document.createElement('input');
    input.value = this.phone;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    
    this.snackBar.open('Нажмите и удерживайте номер для копирования', 'OK', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }

  openPhoneContacts() {
    window.location.href = `tel:${this.phoheNumber.replace(/[^\d+]/g, '')}`;
  }
}

