import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @HostBinding('class.fileover') fileOver: boolean = false;

  constructor() { }

  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('Drag over');
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log('Drag leave');
  }

  //Drop listener
  @HostListener('drop', ['$event']) onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0)
    {
      // this.fileDropped.emmit(files);
      console.log(`voce botou ${files.length} arquivos`);
    }

  }


}
