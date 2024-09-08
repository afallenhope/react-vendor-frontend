import React from "react";

export interface StepperStep {
    [key: number]: number;
    label: string;
    content: React.ReactNode;
    completed?: boolean;
    optional?: boolean;
}