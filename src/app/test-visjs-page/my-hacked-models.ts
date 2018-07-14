import * as vis from 'vis';
import * as visjs from 'ngx-vis';

export interface MyVisjsEgde extends vis.Edge, vis.EdgeOptions {
  id?: string; // NOTE: need this to override the conflict in types of `id`
}
