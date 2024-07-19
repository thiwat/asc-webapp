import _template from 'lodash/template'

let TRANSLATES: object = {
  home_title: 'Search material to specification, Fast and Easily.',
  home_subtitle: 'Reduce spending time  with smart search engine.\nText & Upload to find intimate valid material.',
  home_button_search_material: 'Search Material!',
  menu_home: 'Home',
  menu_search: 'Search',
  menu_project: 'Project',
  menu_user: 'User',
  product_detail_title: 'Detail',
  product_detail_name: 'Name',
  product_detail_code: 'Code',
  product_detail_brand: 'Brand',
  product_detail_price: 'Price',
  search_button_upload_picture: 'Upload Picture',
  product_detail_relate_material: 'Relate Material',
  search_by_text_title: 'Search by Text',
  search_by_text_placeholder: 'Wood, Laminate, Cotton, etc.',
  search_or: 'or',
  search_by_picture_title: 'Search by Picture',
  search_button_image: 'Search Material!',
  common_filter: 'Filter',
  project_title: 'My Project',
  project_button_add_project: 'New Project',
  project_items: '${ amount } Pics',
  login_title: 'Welcome Back',
  common_info_required_field: 'This field is required',
  login_username: 'Username',
  login_password: 'Password',
  login_button_submit: 'Sign in',
  profile_title: 'Hi, ${ name }',
  project_new_project_title: 'New Project',
  project_name: 'Name',
  project_button_submit: 'Submit',
  project_add_success: 'Add Success',
  search_result_source: 'Source',
  search_result_material_result: 'Material result',
  search_need_permission_for_camera: 'Access to Use Device camera',
  project_action_material_board_not_ready: 'Material board feature is comming soon',
  project_action_consult_not_ready: 'FF&E feature is comming soon',
  product_detail_size: 'Size',
  product_detail_thickness: 'THK.',
  project_remove_success: 'Removed product from project',
  common_loading: 'Loading...'
}

export const t = (key: string, data?: unknown): string => {
  return _template(TRANSLATES[key] || key)(data)
}

export const setTranslate = (translate: object) => {
  TRANSLATES = translate
}