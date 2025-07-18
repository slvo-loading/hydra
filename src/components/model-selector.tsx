"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { useModelSelector } from "@/hooks/useModelSelector";
  import { AVAILABLE_MODELS } from "@/lib/models";
  import { useMemo } from "react";

export function ModelSelector() {
    const model = useModelSelector(state => state.model);
    const setModel = useModelSelector(state => state.setModel);
    
    const currentModelLabel = useMemo(() => {
        return AVAILABLE_MODELS.find(m => m.value === model)?.label || "Select Model";
      }, [model]);

    return(
        <Select value={model} onValueChange={ setModel }>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={currentModelLabel} />
            </SelectTrigger>
            <SelectContent>
                {AVAILABLE_MODELS.map(({ value, label }) => (
                    <SelectItem key={value} value={value}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}