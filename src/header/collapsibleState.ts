import { writable } from "svelte/store";

export const expanded = writable(false)

export const toggleExpanded = () => {
    expanded.update(value => !value)
}

export const resetExpandedIfHidden = (hidden: boolean) => expanded.set(false)
