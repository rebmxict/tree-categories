import React from 'react';
import {
  Grid,
	FormControlLabel,
	Checkbox,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { useStyles } from './Styles';
import clsx from 'clsx';
import AddIcon from '@material-ui/icons/Add';

const ColorCheckbox = withStyles({
  root: {
    color: 'gray',
    '&$checked': {
      color: '#FF681A',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function SubCategory({
	subCategories,
	isChecked,
	updateCheck,
}) {
  const classes = useStyles();

  return (
		<Grid item xs={6} className={classes.categoryBox2}>
			<Grid container className={classes.categoryLevel4Container}>
				{subCategories.map((subCategory, i) => {
					return <Grid item xs={6} className={classes.categoryLevel4ContainerIn}>					
						<div className={classes.displayFlex} key={i}>
							<FormControlLabel
								control={
									<ColorCheckbox
										checked={isChecked(subCategory.artId)}
										onChange={() => updateCheck(subCategory.artId)}
										name="checkedF"
										indeterminate={false}
									/>
								}
								className={clsx(classes.categoryLevel2, classes.categoryLevel41)}
								label={subCategory.artTitle}
							/>
						</div>

						{subCategory.subCategories?.map((dSubCategory, i) => 
							<div className={clsx(classes.displayFlex, classes.categoryLevel4Container)}>
								<FormControlLabel
									control={
										<ColorCheckbox
											checked={isChecked(dSubCategory.artId)}
											onChange={() => updateCheck(dSubCategory.artId)}
											name="checkedF"
										/>
									}
									className={classes.categoryLevel4}
									label={dSubCategory.artTitle}
								/>
							</div>
						)}

						<div className={classes.addSubOptionBtn}>
							<AddIcon /><span>Add your option</span>
						</div>
					</Grid>
				})}
			</Grid>
		</Grid>
  );
}

export default SubCategory;