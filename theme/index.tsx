"use client";

import { FunctionComponent, ReactNode } from "react";

import { ConfigProvider, theme } from "antd";

const DarkTheme: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </>
  )

export default DarkTheme;
