import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHome, 
    faUserPlus,
    faUserLock, 
    faWallet, 
    faCoins, 
    faSave,
    faEdit,
    faArrowRight,
    faArrowLeft,
    faHandPointer,
    faUserAlt,
    faTimesCircle,
    faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);
library.add(faUserPlus);
library.add(faWallet)
library.add(faCoins);
library.add(faSave);
library.add(faEdit);
library.add(faUserLock);
library.add(faArrowRight);
library.add(faArrowLeft);
library.add(faHandPointer);
library.add(faUserAlt);
library.add(faTimesCircle);
library.add(faHandHoldingUsd);

export const HomeIcon = () => (
    <i>
        <FontAwesomeIcon icon="home" />
    </i>
);

export const UserPlusIcon = () => (
    <i>
        <FontAwesomeIcon icon="user-plus" />
    </i>  
);

export const WalletIcon = () => (
    <i>
        <FontAwesomeIcon icon="wallet" />
    </i>  
);

export const CoinsIcon = () => (
    <i>
        <FontAwesomeIcon icon="coins" />
    </i>  
);

export const SaveIcon = () => (
    <i>
        <FontAwesomeIcon icon="save" />
    </i>  
);

export const EditIcon = () => (
    <i className="pointer">
        <FontAwesomeIcon icon="edit" />
    </i>  
);

export const UserLockIcon = () => (
    <i className="pointer">
        <FontAwesomeIcon icon="user-lock" />
    </i>  
);

export const ArrowRightIcon = () => (
    <i >
        <FontAwesomeIcon icon="arrow-right" />
    </i>  
);

export const ArrowLeftIcon = () => (
    <i>
        <FontAwesomeIcon icon="arrow-left" />
    </i>  
);

export const HandPointerIcon = () => (
    <i>
        <FontAwesomeIcon icon="hand-pointer" />
    </i>  
);

export const UserAltIcon = () => (
    <i>
        <FontAwesomeIcon icon="user-alt" />
    </i>  
);

export const CloseCircleIcon = () => (
    <i>
        <FontAwesomeIcon icon="times-circle" />
    </i>  
);

export const HandHoldingUsdIcon = () => (
    <i>
        <FontAwesomeIcon icon="hand-holding-usd" />
    </i>  
);