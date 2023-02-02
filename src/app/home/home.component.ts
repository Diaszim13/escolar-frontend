import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MusicsService } from '../services/musics.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class HomeComponent {
	data!: File;
	constructor(config: NgbModalConfig, private modalService: NgbModal, public service: MusicsService) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content: any) {
		this.modalService.open(content);
	}

	onFileChange(event: any) {
		console.log(event.target.files[0]);
		
		this.data = event.target.files[0];
	  }

	async upload() {
		this.service.postMusic(this.data);
	}
}
