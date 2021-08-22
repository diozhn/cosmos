import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => <>{children}</>;
