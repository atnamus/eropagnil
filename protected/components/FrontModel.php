<?php

class FrontModel extends CActiveRecord {

    const ACTIVE = 1;
    const INACTIVE = 0;

    public $create_at;
    public $update_at;

    public function statusTag() {
        if ($this->status == self::ACTIVE) {
            return '<span class="label label-success">Active</span>';
        } else {
            return '<span class="label label-default">Inactive</span>';
        }
    }

    public function beforeSave() {
        if ($this->isNewRecord) {
            $this->create_at = date('Y-m-d H:i:s');
        } else {
            $this->update_at = date('Y-m-d H:i:s');
        }
        return parent::beforeSave();
    }

}
