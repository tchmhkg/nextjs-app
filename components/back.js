import React, { useCallback } from "react";
import { useRouter } from "next/router";
import styled from 'styled-components';
import useTranslation from "~/hooks/useTranslation";

const Button = styled.span`
  cursor: pointer;
`;

const BackButton = ({backUrl = ''}) => {
  const {locale} = useTranslation();
  const router = useRouter();
  const onClickBack = useCallback(() => {
    if(backUrl) {
      router.push(`/${locale}${backUrl}`);
    } else {
      router.back();
    }
  }, [router, backUrl, locale]);

  return (
    <div>
      <Button onClick={onClickBack}>← Back</Button>
    </div>
  );
};

export default React.memo(BackButton);
