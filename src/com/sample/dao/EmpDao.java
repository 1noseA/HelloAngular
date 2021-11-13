package com.sample.dao;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.sample.Employee;

public interface EmpDao {

	@Select("select * from employee where empno = #{empno}")
	public Employee findByPrimarykey(int empno);

	@Update("update employee set salary = #{salary} where empno = #{empno}")
	public void update(Employee emp);

}
