import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamento',
  standalone: true,
  imports: [],
  templateUrl: './orcamento.component.html',
  styles: ``
})
export class OrcamentoComponent implements OnInit {

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }

}
