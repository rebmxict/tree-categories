import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
  searchTitle: {
    width: 487,
    height: 40,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',  
    color: 'rgba(36, 41, 46, 0.85)',
  },
  searchContainer: {
    width: '100%',
    '& input': {
      fontSize: 14,
      paddingTop: 12,
      paddingBottom: 12,
    }
  },
  mainCategoryContainer: {
    marginTop: 25,
    marginBottom: 25,
  },
  categoryContainer: {
    border: '1px solid #CED6E0',
    boxSizing: 'border-box',
    borderRadius: 5,
    height: 716,
  },
  categoryBox1: {
    borderRight: '1px solid #CED6E0',
    padding: 20,
    paddingLeft: 10,
    width: '37%',
    maxWidth: '37%',
    flexBasis: '37%',
    "@media (max-width: 767px)": {
      width: '50%',
      maxWidth: '50%',
      flexBasis: '50%',
    },
    "@media (max-width: 496px)": {
      width: '100%',
      maxWidth: '100%',
      flexBasis: '100%',
      borderRight: '0px',
      borderBottom: '1px solid #CED6E0'
    },
  },
  categoryBox2: {
    height: '100%',
    overflowY: 'scroll',
    padding: 20,
    paddingLeft: 10,
    width: '63%',
    maxWidth: '63%',
    flexBasis: '63%',
    '&::-webkit-scrollbar': {
			display: 'none',
		},
    "@media (max-width: 767px)": {
      width: '50%',
      maxWidth: '50%',
      flexBasis: '50%',
    },
    "@media (max-width: 496px)": {
      width: '100%',
      maxWidth: '100%',
      flexBasis: '100%',
    },
  },
  categoryBox3: {
    height: 608,
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
			display: 'none',
		}
  },
  categoryBox4: {
    marginBottom: 15,
  },
  categoryBox: {
    border: '1px solid #CED6E0',
    boxSizing: 'border-box',
    borderRadius: 5,
    padding: 20,
    textAlign: 'center',
    width: 138,
    height: 160,
    cursor: 'pointer',
    '& span': {
      fontSize: 14,
      marginTop: 15,
      width: '100%',
      color: 'rgba(36, 41, 46, 0.6)',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
    }
  },
  categoryBoxActive: {
    border: '1px solid #FF681A',
    '& span': {
      color: '#24292E',
      fontWeight: 600,
    },
    '& svg': {
      color: '#24292E',
    },
  },
  categoryIconColor: {
    color: 'rgba(36, 41, 46, 0.6)',
    cursor: 'pointer',
  },
  categoryRightPos: {
    alignSelf: 'center',
    marginLeft: 'auto',
    fontSize: 16,
  },
  categoryLevel2: {
    color: '#24292E',
    marginLeft: 0,
    '& > span': {
      fontSize: 14,
      fontWeight: 600,
      lineHeight: '20px',
    }
  },
  categoryLevel3: {
    color: 'rgba(36, 41, 46, 0.6)',
    '& > span': {
      lineHeight: '15px',
      fontSize: 13,
      marginLeft: 5,
    }
  },
  categoryLevel3Container: {
    marginTop: 8,
    marginLeft: 25,
  },
  categoryLevel4: {
    color: 'rgba(36, 41, 46, 0.6)',
    '& > span': {
      lineHeight: '15px',
      fontSize: 13,
    },
    '& > span:last-child': {
      marginLeft: 10,
    }
  },
  categoryLevel41: {
    '& > span:last-child': {
      marginLeft: 10,
    }
  },
  categoryLevel4Container: {
    marginTop: 8,
  },
  categoryLevel4ContainerIn: {
    marginBottom: 15,
  },
  displayFlex: {
    display: 'flex',
    marginBottom: 7,
  },
  categoryLevel3Icon: {
    color: '#24292E',
    fontSize: 12,
  },
  addOptionBtn: {
    width: '100%',
    height: 49,
    boxSizing: 'border-box',
    textTransform: 'capitalize',
    color: 'rgba(36, 41, 46, 0.4)',
    marginTop: 15
  },
  addSubOptionBtn: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgba(36, 41, 46, 0.6)',
    paddingLeft: 10,
    fontSize: 13,
    '& span': {
      marginLeft: 15,
    },
  },
  selectionTitle: {
    height: 25,
    marginTop: 25,
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 14,
    lineHeight: 16,
    display: 'flex',
    alignItems: 'center',
    color: '#24292E',
  },
  divider: {
    height: 2,
    marginTop: 7,
    marginBottom: 12,
  },
  selectedCategoryContainer: {
    width: '100%',
    overflowX: 'scroll',
    paddingBottom: 20,
  },
  selectedCategoryItem: {
    display: 'flex',
    whiteSpace: 'nowrap',
    '& ul': {
      display: 'flex',
      fontSize: 12,
      lineHeight: '16px',
      '& li': {
        marginRight: 25,
        // whiteSpace: 'nowrap',
      }
    },
    '& svg': {
      alignSelf: 'center',
      cursor: 'pointer',
      fontSize: 15,
      color: 'rgba(36, 41, 46, 0.6)',
      position: 'absolute',
      right: 'calc((100% - 960px) / 2 + 24px)',
      padding: 3,
      background: 'white',
    }
  },
  carouselContainer: {
    width: 'calc(100% + 16px)',
    marginTop: 25,
    marginBottom: 25,
    '& .react-multi-carousel-list': {
      position: 'unset',
    },
    // boxSizing: 'border-box',
    // '&& ul li': {
    //   margin: '0px!important',
    // },
    '& button': {
      left: 'calc((100% - 960px) / 2 + 9px)',
      "@media (max-width: 960px)": {
        left: 9,
      },
      border: '1px solid #CED6E0',
      borderRadius: 5,
      background: 'white!important',
      width: 30,
      height: 30,
      minWidth: 30,
      minHeight: 30,
      '&::before': {
        color: 'rgba(36, 41, 46, 0.85)',
        zoom: 0.5,
      }
    },
    '& button:last-child': {
      // border: '1px solid #CED6E0',
      // zIndex: 1,
      left: 'unset',
      right: 'calc((100vw - 960px) / 2 + 9px)',
      // marginLeft: -22,
      // borderRadius: 5,
      // background: 'white!important',
      // zoom: 0.7,
      "@media (max-width: 960px)": {
        right: 9,
      }
    },
    // '& button span': {
    //   borderColor: 'rgba(36, 41, 46, 0.85)',
    //   borderWidth: '2px 2px 0 0',
    //   padding: 3
    // }
  },
}));