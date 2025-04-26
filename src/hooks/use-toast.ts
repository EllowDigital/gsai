import * as React from "react";
import type { ToastActionElement, ToastProps } from "@/components/ui/toast";

// Constants
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000; // Long delay for simulation

// Types
type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

type ActionType = {
  ADD_TOAST: "ADD_TOAST";
  UPDATE_TOAST: "UPDATE_TOAST";
  DISMISS_TOAST: "DISMISS_TOAST";
  REMOVE_TOAST: "REMOVE_TOAST";
};

const actionTypes: ActionType = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

let toastCount = 0;
function generateId() {
  toastCount = (toastCount + 1) % Number.MAX_SAFE_INTEGER;
  return toastCount.toString();
}

// Action Types
type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: string }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: string };

// State Interface
interface State {
  toasts: ToasterToast[];
}

// Timeout management
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const enqueueRemoval = (toastId: string) => {
  if (!toastTimeouts.has(toastId)) {
    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId);
      dispatch({ type: "REMOVE_TOAST", toastId });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
  }
};

// Reducer Function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toast.id === action.toast.id ? { ...toast, ...action.toast } : toast
        ),
      };

    case "DISMISS_TOAST":
      const { toastId } = action;
      const toDismiss = toastId
        ? [toastId]
        : state.toasts.map((toast) => toast.id);
      toDismiss.forEach(enqueueRemoval);

      return {
        ...state,
        toasts: state.toasts.map((toast) =>
          toDismiss.includes(toast.id) ? { ...toast, open: false } : toast
        ),
      };

    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: action.toastId
          ? state.toasts.filter((toast) => toast.id !== action.toastId)
          : [],
      };

    default:
      return state;
  }
};

// Listener management for state changes
const listeners: Array<(state: State) => void> = [];
let currentState: State = { toasts: [] };

const dispatch = (action: Action) => {
  currentState = reducer(currentState, action);
  listeners.forEach((listener) => listener(currentState));
};

// Toast function to add/update/dismiss toasts
function toast({ ...props }: Omit<ToasterToast, "id">) {
  const id = generateId();

  const update = (newProps: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...newProps, id },
    });

  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

// Custom Hook to manage toast state
function useToast() {
  const [state, setState] = React.useState<State>(currentState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, [setState]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
