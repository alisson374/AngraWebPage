import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonMenuButton, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-fan-clube',
  templateUrl: './fan-clube.page.html',
  styleUrls: ['./fan-clube.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonMenuButton, IonButtons, IonInput, IonItem, IonLabel, IonModal]
})
export class FanClubePage implements AfterViewInit {
  readonly name = signal('');
  readonly email = signal('');
  readonly age = signal('');
  readonly errors = signal<Record<string, string>>({});
  readonly successMessage = signal('');
  readonly isModalOpen = signal(false);

  @ViewChild(IonModal) private modal?: IonModal;

  ngAfterViewInit(): void {
    if (this.isModalOpen()) {
      this.modal?.present();
    }
  }

  submitForm(): void {
    const nextErrors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const nameValue = this.name().trim();
    if (!nameValue) {
      nextErrors['name'] = 'O nome é obrigatório.';
    } else if (nameValue.length > 100) {
      nextErrors['name'] = 'O nome deve ter até 100 caracteres.';
    }

    const emailValue = this.email().trim();
    if (!emailValue) {
      nextErrors['email'] = 'O e-mail é obrigatório.';
    } else if (!emailRegex.test(emailValue)) {
      nextErrors['email'] = 'Digite um e-mail válido.';
    }

    const ageValue = this.age().trim();

    if (!ageValue) {
      nextErrors['age'] = 'A idade é obrigatória.';
    } else if (!/^\d+$/.test(ageValue) || Number(ageValue) <= 0) {
      nextErrors['age'] = 'A idade deve ser um número positivo.';
    }

    this.errors.set(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      this.successMessage.set('');
      this.isModalOpen.set(false);
      return;
    }

    const registeredName = this.name().trim();

    this.name.set('');
    this.email.set('');
    this.age.set('');
    this.errors.set({});
    this.successMessage.set(`Cadastro realizado com sucesso para ${registeredName}!`);
    this.isModalOpen.set(true);

    queueMicrotask(() => this.modal?.present());
  }

  closeModal(): void {
    this.modal?.dismiss();
    this.isModalOpen.set(false);
  }

  isFormValid(): boolean {
    const currentErrors = this.errors();

    return !currentErrors['name'] && !currentErrors['email'] && !currentErrors['age'];
  }
}
