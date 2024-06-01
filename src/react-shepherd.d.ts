// react-shepherd.d.ts
declare module 'react-shepherd' {
    import * as React from 'react';
  
    export interface TourOptions {
      defaultStepOptions?: object;
      useModalOverlay?: boolean;
    }
  
    export interface Step {
      id: string;
      attachTo: { element: string; on: string };
      title: string;
      text: string;
      buttons?: { text: string; action: () => void }[];
    }
  
    export interface ShepherdTourContextValue {
      start: () => void;
    }
  
    export function useShepherdTour(options: { tourOptions: TourOptions; steps: Step[] }): ShepherdTourContextValue;
  
    export const ShepherdTourContext: React.Context<ShepherdTourContextValue>;
  }
  