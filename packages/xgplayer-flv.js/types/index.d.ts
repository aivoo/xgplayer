declare module 'xgplayer-flv.js' {
  import type { BasePlugin } from 'xgplayer';
  export interface IPluginConfig {
    // 请求是否带cookie
    hlsOpts?: { [propName: string]: any; };
  }

  class FlvJsPlugin extends BasePlugin {
    public static get pluginName(): string;
    public static get defaultConfig(): any;
    public static isSupported: boolean;
    constructor(options: any);
    public _destroy(): void;
    public destroy(): void;
    config: { [propName: string]: any; };
    readonly player: any;
  }

  export default FlvJsPlugin;
}
