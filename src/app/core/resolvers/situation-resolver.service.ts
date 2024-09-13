import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SituationD } from '../../models/situation-D';
import { Observable } from 'rxjs';
import { DangRiskService } from '../../services/dang-risk.service';
import { SharedService } from '../store/shared.service';

@Injectable({
  providedIn: 'root'
})
export class SituationResolverService {
  private readonly dangeriskService = inject(DangRiskService);
  private readonly sharedService = inject(SharedService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SituationD> {
    return this.dangeriskService.getDangRById(this.sharedService.situationDStore()?.situationId!);
  }

}
