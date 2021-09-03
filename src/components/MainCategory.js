
import React from 'react';
import {
  FormControl,
  OutlinedInput,
} from '@material-ui/core';
import { useStyles } from './Styles';
import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Material Icons
import SearchIcon from '@material-ui/icons/Search';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function MainCategory({
	mainCategories,
	selectedMainCategory,
	allSelected,
	setAllSelected,
	setSelectedMainCategory,
}) {
  const classes = useStyles();

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 6
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 4
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 2
		}
	};

  return (
    <>
      <span className={classes.searchTitle}>Search by product/service category, name, or UNSPSC code</span>
      <FormControl variant="outlined" className={classes.searchContainer} style={{width: '100%'}}>
        <OutlinedInput          
          // value={}
          // onChange={}
          endAdornment={<SearchIcon />}
          inputProps={{
            'placeholder': 'Search here'
          }}
          labelWidth={0}
        />
      </FormControl>

			<div className={classes.carouselContainer}>
				<Carousel responsive={responsive}>
					{mainCategories.map((mainCategory, i) => 
						<div
							className={clsx(classes.categoryBox, selectedMainCategory === i && classes.categoryBoxActive)}
							key={i}
							onClick={() => {
								setSelectedMainCategory(i)
								// if (!(mainCategory.artId in allSelected)) {
								// 	setAllSelected(prev => ({...prev, [mainCategory.artId]: {}}));
								// }
							}}
						>
							<AccessTimeIcon fontSize='large' className={classes.categoryIconColor} />
							<span>{mainCategory.artTitle}</span>
						</div>
					)}
				</Carousel>
			</div>
		</>
  );
}

export default MainCategory;