import React, { ReactNode } from "react";

export const Tag = ({ children }: { children: ReactNode }) => (
  <div className="border-2 border-primary p-1 rounded-[5px] text-primary">
    {children}
  </div>
);

export const TagWrapper = ({ children }: { children: ReactNode }) => (
  <div className="flex justify-center flex-wrap gap-1 mb-4">
    {children}
  </div>
);