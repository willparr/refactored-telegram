import { createContext, useContext, useState } from "react";

type ButtonAction = {
  text: string;
  action: any;
};
type CardPreviewProps = { children: React.ReactNode };
type CardPreviewContext = {
  headerContent: string | undefined;
  setHeaderContent: React.Dispatch<string | undefined>;
  bodyMessage: string;
  setBodyMessage: React.Dispatch<string>;
  footerMessage: string;
  setFooterMessage: React.Dispatch<string>;
  buttons: Array<ButtonAction> | undefined;
  setButtons: React.Dispatch<Array<ButtonAction> | undefined>;
  enabledSections: any;
  setEnabledSections: (enabledSections: any) => void;
};

const PreviewStateContext = createContext<CardPreviewContext | undefined>(
  undefined
);

const defaultEnabledSections = {
  header: false,
  body: true,
  footer: false,
  buttons: false,
};

function CardPreviewProvider({ children }: CardPreviewProps) {
  const [headerContent, setHeaderContent] = useState<string | undefined>(
    undefined
  );
  const [bodyMessage, setBodyMessage] = useState("");
  const [footerMessage, setFooterMessage] = useState("");
  const [buttons, setButtons] = useState<Array<ButtonAction> | undefined>(
    undefined
  );
  const [enabledSections, setEnabledSections] = useState(
    defaultEnabledSections
  );

  const value = {
    headerContent,
    setHeaderContent,
    bodyMessage,
    setBodyMessage,
    footerMessage,
    setFooterMessage,
    buttons,
    setButtons,
    enabledSections,
    setEnabledSections,
  };
  return (
    <PreviewStateContext.Provider value={value}>
      {children}
    </PreviewStateContext.Provider>
  );
}

function useCardPreview() {
  const context = useContext(PreviewStateContext);
  if (context === undefined) {
    throw new Error("usePreview must be used within a CountProvider");
  }
  return context;
}

export { CardPreviewProvider, useCardPreview };
