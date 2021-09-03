import React from 'react';
import {
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useStyles } from './Styles';
// Material Icons
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const ColorCheckbox = withStyles({
  root: {
    color: 'gray',
    '&$checked': {
      color: '#FF681A',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Category({
	categories,
	setCategories,
	exploreCategories,
	setSelectedSubCategory,
	isChecked,
	updateCheck,
}) {
  const classes = useStyles();

  return (
		<Grid item xs={6} className={classes.categoryBox1}>
			<div className={classes.categoryBox3}>
				{categories.map((category, i) =>
					<div className={classes.categoryBox4} key={`categoryBox${i}`}>
						<div className={classes.displayFlex} key={i}>
							<FormControlLabel
								control={
									<ColorCheckbox
										checked={isChecked(category.artId)}
										onChange={() => updateCheck(category.artId)}
										name="checkedF"
										indeterminate={false}
									/>
								}
								className={classes.categoryLevel2}
								label={category.artTitle}
							/>
							{category.subCategoryOpen ?  
							<RemoveIcon
								className={clsx(classes.categoryIconColor, classes.categoryRightPos)}
								onClick={() => {
									const withPastData = [...categories];
									withPastData[i].subCategoryOpen = false;
									setCategories(withPastData);
								}}
							/> :
							<AddIcon
								className={clsx(classes.categoryIconColor, classes.categoryRightPos)}
								onClick={() => exploreCategories(category.artId, i, 'categories')}
							/>}
						</div>

						{category.subCategoryOpen && category?.subCategories?.map((subCategory, j) => 
							<div className={clsx(classes.displayFlex, classes.categoryLevel3Container)} key={`level3${j}`}>
								<FormControlLabel
									control={
										<ColorCheckbox
											checked={isChecked(subCategory.artId)}
											onChange={() => updateCheck(subCategory.artId)}
											name="checkedF"
										/>
									}
									className={classes.categoryLevel3}
									label={subCategory.artTitle}
								/>
								<ArrowForwardIosIcon
									className={clsx(classes.categoryIconColor, classes.categoryRightPos, classes.categoryLevel3Icon)}
									onClick={() => {
										setSelectedSubCategory(j)
									}}
								/>
							</div>
						)}
					</div>
				)}
			</div>

			<Button variant="outlined" className={classes.addOptionBtn}>Add your option</Button>
		</Grid>
  );
}

export default Category;