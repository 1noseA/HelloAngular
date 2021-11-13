package com.sample;

import java.io.InputStream;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.sample.dao.EmpDao;

@Path("employee")
public class EmpResource {

	@GET
	@Path("emp/{empno}")
	@Produces("application/json")
	public Employee getEmployeeById(@PathParam("empno") int empno) {

		try {
			String resource = "config.xml";
			InputStream inputStream = Resources.getResourceAsStream(resource);
			SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(inputStream);

			SqlSession session = sqlSessionFactory.openSession();
			EmpDao dao = session.getMapper(EmpDao.class);

			return dao.findByPrimarykey(empno);

		} catch (Exception e) {
			throw new RuntimeException(e);
		}

	};

}
